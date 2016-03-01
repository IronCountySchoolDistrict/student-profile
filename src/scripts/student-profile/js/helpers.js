Handlebars.registerHelper('dobToAge', function(options) {
	return getAge(options.fn(this));
});

Handlebars.registerHelper('statusLabel', function(options) {
	return enrollStatusToLabel(options.fn(this));
});

Handlebars.registerHelper('toFullName', function(firstName, middleName, lastName, options) {
	return toFullName(firstName, middleName, lastName);
});

Handlebars.registerHelper('toContactFullName', function(firstName,  lastName, options) {
	return toFullName(firstName, null, lastName);
});

Handlebars.registerHelper('isLegalGuardian', function(legalGuardian, options) {
	return isLegalGuardian(legalGuardian);
});

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function enrollStatusToLabel(enrollStatus) {
	if (enrollStatus === '0') {
		return 'Active';
	}
}

function isLegalGuardian(legalGuardian) {
	return legalGuardian === '1' ? 'Yes' : 'No';
}

function toFullName(firstName, middleName, lastName) {
	var fullName = '';
	fullName += firstName;
	if (middleName) {
		fullName += ' ' + middleName;
	}
	fullName += ' ' + lastName;
	return fullName;
}