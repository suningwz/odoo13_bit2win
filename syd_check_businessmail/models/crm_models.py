# -*- coding: utf-8 -*-

from odoo import models, fields, api
from odoo.exceptions import UserError, ValidationError

import inspect
import re
import os

class CrmTeam(models.Model):
    _inherit = "crm.team"
    
    mail_control_active = fields.Boolean('Email control active')

class Lead(models.Model):
    _inherit = 'crm.lead'
    
    @api.model
    def create(self, vals):

        #Have to activate the from the sales team page    
        if(self.env['crm.team'].search([('id','=', vals['team_id'])]).mail_control_active == False): 
            return super(Lead, self).create(vals)
        
        if ('email_from' in vals):
            if(vals['email_from'] != False):
                if(self._check_valid_mail(vals['email_from']) == False): 
                    raise UserError("Plese, insert a corporate") 
        
                if(self._is_business_mail(vals['email_from']) == False): 
                    self.env["refused_email"].sudo().create({"domain_failed": self._get_mail_address_domain(vals['email_from'])})
                    self._cr.commit()

                    raise UserError("Plese, insert a corporate mail") 
        
        if ('email_cc' in vals):
            if(vals['email_cc'] != False):
                if(self._check_valid_mail(vals['email_cc']) == False): 
                    raise UserError("Please, insert a corporate mail cc address")   
        
                if(self._is_business_mail(vals['email_cc']) == False): 
                    self.env["refused_email"].sudo().create({"domain_failed": self._get_mail_address_domain(vals['email_cc'])})
                    self._cr.commit()
                    
                    raise UserError("Plese, insert a corporate mail in cc field")     
        
        
        self.env["refused_email"].write({"domain_failed": "testdavide"})

        return super(Lead, self).create(vals)

    def _is_business_mail(self, email_address):
  
        directory_path = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))        
        complete_file_path = os.path.join(directory_path, 'blacklist_domains.txt')
        
        with open(complete_file_path) as file:
            black_list_domains = [line.rstrip() for line in file]        
        
        if(self._get_mail_address_domain(email_address) in black_list_domains ):
            return False
        else: 
            return True
    
    def _check_valid_mail(self, email_address):
        if (re.match(r"[^@]+@[^@]+\.[^@]+", email_address)):
            return True
        else:
            return False
        
    def _get_mail_address_domain(self, email_address):
        return email_address.split('@')[1]