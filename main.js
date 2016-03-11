    function tab(el) {
        var menu=el.parentNode;
        var tabs=menu.getElementsByTagName('li');
        for (var i=0; i<tabs.length; i++) {
            var tab=tabs[i];
            var content=document.getElementById(tab.id+'_content');
            if (tab.id==el.id) {
                tab.className='tab_active';
                if (content) {
                    content.className='tab_content visible';
                }
            }
            else {
                tab.className='';
                if (content) {
                    content.className='tab_content';
                }
            }
        }
    };

