class CodeError extends Error {
    
    constructor(message, code) {
        super(message)
        this.code = code
    }
}

throw new CodeError("Dummy require", "MODULE_NOT_FOUND")