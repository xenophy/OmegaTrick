/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Omega Trick Library 0.5.0
 * Copyright(c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * http://omegatrick.com
 * http://www.gnu.org/licenses/gpl-3.0.html
 */
Application.setup({

    onReady : function() {

        Ext.get('bubutton').on('click', function(e, t) {

            var el = Ext.get(t);

            if(Application.beforeunload) {
                Application.beforeunload = false;
                el.update('閉じる前に確認を行う');
            } else {
                Application.beforeunload = '任意のメッセージ';
                el.update('そのまま閉じる');
            }

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
