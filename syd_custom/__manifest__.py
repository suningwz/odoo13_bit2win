# -*- coding: utf-8 -*-
{
    'name': "Custom B2W",
    'version': '0.0.9',
    'license': 'Other proprietary',
    'summary': """Helpdesk Extended
    """,
    'author': "SayDigital",
    'website': "http://www.saydigital.it",
    'category' : 'Website',
    'depends': [
                'portal',
                'helpdesk',
                'analytic',
                'website_helpdesk',
                'sale',
                'syd_environment_sla',
                'syd_helpdesk_contract',
                'website'
                ],
    'data':[
        'data/data.xml',
        'views/helpdesk_templates.xml',
        'wizard/wizard.xml',
        'views/views.xml',
        'views/asset.xml',
        'views/snippet.xml',
        'views/helpdesk_portal_templates.xml',
        'security/ir.model.access.csv'
    ],
    'installable' : True,
    'application' : False,
}