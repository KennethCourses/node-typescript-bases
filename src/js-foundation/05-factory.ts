interface BuildMakePersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonProperties {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getId, getAge }: BuildMakePersonOptions) => {
    return ({ name, birthdate }: PersonProperties) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}