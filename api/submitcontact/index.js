module.exports = async function (context, req) {
    context.log('Processing contact submission');

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: "Missing required fields"
        };
        return;
    }

    // Simulate storing contact info (in-memory or log)
    context.bindings.outputTable = {
        PartitionKey: "contacts",
        RowKey: new Date().getTime().toString(),
        name,
        email,
        message
    };

    context.res = {
        status: 200,
        body: { status: "success", message: "Contact submitted" }
    };
};
