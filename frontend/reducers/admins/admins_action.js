import * as APIUtil from './admins_api_utils';

export const RECEIVE_ALL_ADMINS = 'RECEIVE_ALL_ADMINS';
export const RECEIVE_ADMIN = 'RECEIVE_ADMIN';
export const REMOVE_ADMIN = 'REMOVE_ADMIN';


const receiveAdmins = (admins)=>({
    commeadminsnts: admins,
    type: RECEIVE_ALL_ADMINS
});

const receiveAdmin = (admin)=>({
    admins,
    type: RECEIVE_ADMIN
});

const removeAdmin = (admin)=>({
    admins,
    type: REMOVE_ADMIN
});

export const fetchAdmins = ()=>(dispatch)=>(
    APIUtil.fetchAdmins().then( admins => dispatch(receiveAdmins(admins)))
)

export const createAdmin = (admin)=>(dispatch)=>(         
    APIUtil.createAdmin(admin).then(admin=> dispatch(receiveAdmin(admin))))


export const deleteAdmin = (admin)=>(dispatch)=>(         
    APIUtil.deleteAdmin(admin).then(admin=> dispatch(removeAdmin(admin)))
)



