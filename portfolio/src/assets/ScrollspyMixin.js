import { throttle } from 'lodash';

export default {
    data() {
        return {
            activeNavItem: null,
        };
    },
    mounted() {
        this.handleScroll = throttle(this.checkScroll, 100);
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        checkScroll() {
            const navItems = document.querySelectorAll('.scrollactive-item');
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            for (let i = navItems.length - 1; i >= 0; i--) {
                const currentItem = navItems[i];
                const target = document.querySelector(currentItem.getAttribute('href'));

                if (target.offsetTop <= scrollPosition) {
                    this.activeNavItem = currentItem.getAttribute('href');
                    return;
                }
            }

            this.activeNavItem = null;
        },
    },
};
