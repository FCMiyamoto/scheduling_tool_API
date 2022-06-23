"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSerializer = void 0;
const _serializeSingleUser = (user) => {
    return {
        id: user.id,
        username: user.username,
        password: user.password
    };
};
class UserSerializer {
    serialize(data) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
}
exports.UserSerializer = UserSerializer;
