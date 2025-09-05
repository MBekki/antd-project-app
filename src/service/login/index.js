import { service } from '..';

export default {
    boss: data => service.post('/api/auth/moderator', data),
    tv: data => service.post('/api/auth/televizor', data),
};
