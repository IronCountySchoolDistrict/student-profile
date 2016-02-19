Handlebars.registerHelper('dobToAge', function(options) {
	return getAge(options.fn(this));
});

Handlebars.registerHelper('statusLabel', function(options) {
	return enrollStatusToLabel(options.fn(this));
});

Handlebars.registerHelper('toFullName', function(options) {
	return enrollStatusToLabel(options.fn(this));
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
	if (enrollStatus === 1) {
		return 'Active';
	}
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