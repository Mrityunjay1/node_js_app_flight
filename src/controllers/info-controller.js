const info = (req, res) => {
    return res.json({
        success: true,
        message: 'Hello World!',
        error: {},
        data: {},
    })
}


module.exports = {
    info,
}