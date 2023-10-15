
const getProtectedResource = (req, res) => {
    res.status(200).json({
        message: 'Protected resource'
    });
}

const getPublicResource = (req, res) => {
    res.status(200).json({
        message: 'Public resource'
    });
}

module.exports = {
    getProtectedResource,
    getPublicResource
}