module.exports = async function (context, req) {
    context.log('Fetching contact submissions');

    const contacts = context.bindings.contacts || [];

    context.res = {
        status: 200,
        body: contacts
    };
};
