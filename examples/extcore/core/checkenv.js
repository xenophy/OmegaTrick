/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */
Application.setup({

    onReady : function() {

        // Omega Trick Version
        Ext.DomHelper.append('ret', {
            cn: [{
                html: 'Ext JS:' + ((Trick.isExtJS === true) ? 'true' : 'false')
            },{
                html: 'Ext Core:' + ((Trick.isExtCore === true) ? 'true' : 'false')
            },{
                html: 'Sencha Touch:' + ((Trick.isSenchaTouch === true) ? 'true' : 'false')
            }]
        });

    }

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
