import '../../.storybook/utils.css';
import AppNavbar from '../components/AppNavbar';

export default {
    title: 'AppNavbar',
    component: AppNavbar
};

export const Default = () => ({
    components: { AppNavbar },
    template: '<AppNavbar appName="Babylon" />',
});
