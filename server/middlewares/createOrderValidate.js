const createOrderValidate = (req, res, next) => {
    const {namePay, fullName, phone, email, description, sum} = req.body;

    if (!namePay || !fullName || !phone || !email || !description || !sum) {
        return res.status(404).json({message: 'EMPTY_FIELD_ERROR'})
    }

    const correctNamesPay = ['00000000000000000130', '00000000000000000150'];
    const isValidNamePay = correctNamesPay.includes(namePay);
    if (!isValidNamePay) {
        return res.status(404).json({message: 'NAME_PAY_ERROR'})
    }

    const isValidFullName = /^[\p{L}\s]+$/u.test(fullName);
    const isCurrentFullNameLength = fullName.length > 6 && fullName.length <= 128;
    if (!isValidFullName || !isCurrentFullNameLength) {
        return res.status(404).json({message: 'FULL_NAME_ERROR'})
    }

    const isValidPhone = /^\d+$/.test(phone);
    const isCurrentPhoneLength = phone.length >= 7 && phone.length <= 15;
    if (!isValidPhone || !isCurrentPhoneLength) {
        return res.status(404).json({message: 'NUMBER_ERROR'})
    }

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isCurrentEmailLength = email.length >= 3 && email.length <= 128;
    if (!isValidEmail || !isCurrentEmailLength) {
        return res.status(404).json({message: 'EMAIL_ERROR'})
    }

    const isCurrentDescriptionLength = description.length >= 9 && description.length <= 128;
    if (!isCurrentDescriptionLength) {
        return res.status(404).json({message: 'DESCRIPTION_ERROR'})
    }

    const isValidSum = /^\d+$/.test(sum) && Number(sum) >= 1;
    const isCurrentSumLength = sum.length >= 1 && sum.length <= 10;
    if (!isValidSum || !isCurrentSumLength) {
        return res.status(404).json({message: 'SUM_ERROR'})
    }

    return next();
}

export default createOrderValidate;
