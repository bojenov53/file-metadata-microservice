export const uploadFile = (req, res) => {
    const { originalname, mimetype, size } = req.file;

    const metadata = {
        name: originalname,
        type: mimetype,
        size: size
    };

    res.json(metadata);
};