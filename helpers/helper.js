import bcrypt from 'bcrypt';

export const HashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword; // Return the hashed password
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to be handled in the calling code
    }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword); // Use hashedPassword instead of HashPassword
};
