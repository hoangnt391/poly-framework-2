interface Icomments {
    _id: string;
    User_id: string;
    content: string;
    Product_id: string;
    role: "admin" | "member",
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default Icomments

