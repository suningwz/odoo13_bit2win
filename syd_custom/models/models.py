# -*- coding: utf-8 -*-

from odoo import models, fields, api

TICKET_FIELDS = ['name','release_id','reported_by','access_granted','level','environment_id','description','contract_id','partner_id','partner_created_id','user_who_found','impact','ticket_type_id','priority']


                
class HelpdeskReason(models.Model):
    _name = "helpdesk.reason"
    _description = "Reason"
    
    name = fields.Char('Reason') 
    sequence = fields.Integer('Sequence')
    
class HelpdeskRelease(models.Model):
    _name = "helpdesk.release"
    _description = "Release"
    
    name = fields.Char('Release')
    sequence = fields.Integer('Sequence')
                    
class HelpdeskReported(models.Model):
    _name = "helpdesk.reported"
    _description = "Reported"
    
    name = fields.Char('Reason')
    sequence = fields.Integer('Sequence')
                
class HelpdeskTicket(models.Model):
    _inherit = "helpdesk.ticket"            
       
    user_who_found = fields.Text(string="User who found the problem")
    partner_created_id= fields.Many2one('res.partner',string="Partner")
    impact = fields.Selection([('0','Blocking'),('1','Non Blocking')],default="0")
    access_granted = fields.Boolean('Access Granted')
    level = fields.Selection([('1','Level 1'),('2','Level 2')],default="1")
    fixing = fields.Boolean('Fixing')
    pay_attention = fields.Boolean('Pay Attention')
    reason_why_id = fields.Many2one('helpdesk.reason','Reason')
    release_id = fields.Many2one('helpdesk.release','Release')
    reported_by = fields.Many2one('helpdesk.reportedby','Reported by')
    
    @api.model
    def website_writable(self):
        model = self.env['ir.model'].sudo().search([('model', '=', 'helpdesk.ticket')])
        model.website_form_access = True
        self.env['ir.model.fields'].sudo().formbuilder_whitelist('helpdesk.ticket',TICKET_FIELDS)
    
    @api.model
    def _read_group_stage_ids(self, stages, domain, order):
        
        if self.env.context.get('from_home'):
            search_domain = [(True, '=', True)]
            return stages.search(search_domain, order=order)

        return super(HelpdeskTicket,self)._read_group_stage_ids(stages, domain, order)