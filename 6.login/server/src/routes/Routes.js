import { 
    addNewUser,
    getUserWithemail,
    getUser

} from '../controllers/Controller';

const routes = (app) => {

    app.route('/register').post(addNewUser);
   
    app.route('/login').post(getUserWithemail);

    app.route('/register').get(getUser)
    
}


export default routes;
