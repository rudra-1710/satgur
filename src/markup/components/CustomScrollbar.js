import { useEffect } from 'react';

// react router dom
import { useLocation } from  'react-router-dom';

// overlay scrollbars
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';

const CustomScrollbar = () => {

    const { pathname } = useLocation();

    const scrollbar = OverlayScrollbars(document.body, {
        overflowBehavior : {
            x : "hidden",
            y : "scroll"
        },
        callbacks: {
            onScroll: () => {
                const scroll_position = scrollbar.scroll().position.y;
                const navigation = document.querySelector('.navigation');
        
                if (typeof(navigation) === 'undefined' || navigation === null) return;
        
                if (window.innerHeight > 991 && scroll_position > 53)  {
                    navigation.classList.add('scrolled');
                } else if (window.innerHeight < 991 && scroll_position > 30)  {
                    navigation.classList.add('scrolled');
                }
                else {
                    navigation.classList.remove('scrolled');
                }
            }
        }
    });
  
    // scroll to top on route change
    useEffect(() => {
        scrollbar.scroll(0);
    }, [pathname, scrollbar]);

    useEffect(() => {
        scrollbar.update();
    }, [scrollbar]);

    return null;
};

export default CustomScrollbar;
