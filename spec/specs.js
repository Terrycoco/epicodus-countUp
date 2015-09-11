// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
// });

describe('countUp',function() {
  it("returns all numbers if interval is 1", function() {
    expect(countUp(5, 1)).to.eql([1,2,3,4,5]);
  });

  it("returns every other if interval is 2", function() {
    expect(countUp(5, 2)).to.eql([2,4]);
  });

  it("returns every five if interval is 5", function() {
    expect(countUp(30,5)).to.eql([5,10,15,20,25,30]);
  });
});
