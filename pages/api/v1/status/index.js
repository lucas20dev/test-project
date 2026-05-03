function status(request, response) {
    response.status(200).json({chave: "projeto teste"})
}

export default status