import { User } from "../../domain/User";

const _serializeSingleUser = (user: User) => {
    return {
        id: user.id,
        username: user.username,
        password: user.password
    }
}

export class UserSerializer {
    serialize(data: any) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
}