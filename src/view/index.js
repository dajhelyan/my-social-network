// importando vistas
import { logInView } from './login.js';
import { registerView } from './register.js';
import { postView } from './post.js';

const components = {
    login: logInView,
    register: registerView,
    post: postView
}

export { components }; 