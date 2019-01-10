var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
	this.Given(/^I go to "([^"]*)"$/, function(site) {
		browser.get(site);
		return expect(browser.driver.getTitle()).to.eventually
				.equal('AngularJS — Superheroic JavaScript MVW Framework');
	});

	this.When(/^I add "([^"]*)" in the task field$/, function(task) {
		return element(by.model('todoList.todoText')).sendKeys(task);
	});

	this.When(/^I click the add button$/, function() {
		return element(by.css("input.btn-primary")).click();
	});

	this.Then(/^I should see my new task in the list$/, function() {
		var todoList = element.all(by.repeater('todo in todoList.todos'));
		return Promise.all([
				expect(todoList.count()).to.eventually.equal(3),
				expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome')
						])
						.then(function (values) {
					        values.forEach(function (value) {
					            console.log('then:' + value);
					        });
					    })
					    .catch(function (err) {
					        console.log(err);
					    });
	});
};