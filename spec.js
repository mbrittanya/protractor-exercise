describe('testing the Nav bar', function() {
  var nav = element(by.css('.nav'));
  var navOptions = element.all(by.css('.nav-option'));

  beforeEach(function(){
    browser.get('http:localhost:8080/');
  });

  it('should have a nav', function() {
    expect(nav.isPresent()).toBe(true);
  });

  it('should have three nav', function() {
    expect(navOptions.count()).toBe(3);
  });

  it('The final option should be Messages', function() {
    expect(navOptions.last().getText()).toContain('Messages');
  });



});