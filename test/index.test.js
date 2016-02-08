'use strict'; /* global describe, it, before */
var should = require('should');
var writtenNumber = require('..');

describe('written-number', function() {
  describe('writtenNumber(n, { lang: \'en\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'en';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(1000000000).should.equal('one billion');
      writtenNumber(3).should.equal('three');
      writtenNumber(8).should.equal('eight');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('thirteen');
      writtenNumber(19).should.equal('nineteen');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('twenty');
      writtenNumber(25).should.equal('twenty-five');
      writtenNumber(88).should.equal('eighty-eight');
      writtenNumber(73).should.equal('seventy-three');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(200).should.equal('two hundred');
      writtenNumber(242).should.equal('two hundred and forty-two');
      writtenNumber(1234).should.equal(
          'one thousand two hundred and thirty-four'
      );
      writtenNumber(4323).should.equal(
          'four thousand three hundred and twenty-three'
      );
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
          'four million three hundred twenty-three thousand'
      );
      writtenNumber(4323055).should.equal(
          'four million three hundred twenty-three thousand and fifty-five'
      );
      writtenNumber(1570025).should.equal(
          'one million five hundred seventy thousand and twenty-five'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('one billion');
      writtenNumber(2580000000).should.equal(
          'two billion five hundred eighty million'
      );
      writtenNumber(1000000000000).should.equal('one trillion');
      writtenNumber(3627000000000).should.equal(
          'three trillion six hundred twenty-seven billion'
      );
    });
  });

  describe('writtenNumber(n, { lang: \'pl\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'pl';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('trzy');
      writtenNumber(8).should.equal('osiem');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('trzynaście');
      writtenNumber(19).should.equal('dziewiętnaście');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('dwadzieścia');
      writtenNumber(25).should.equal('dwadzieścia pięć');
      writtenNumber(88).should.equal('osiemdziesiąt osiem');
      writtenNumber(73).should.equal('siedemdziesiąt trzy');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(200).should.equal('dwieście');
      writtenNumber(201).should.equal('dwieście jeden');
      writtenNumber(242).should.equal('dwieście czterdzieści dwa');
      writtenNumber(382).should.equal('trzysta osiemdziesiąt dwa');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(1000).should.equal('tysiąc');
      writtenNumber(2000).should.equal('dwa tysiące');
      writtenNumber(3000).should.equal('trzy tysiące');
      writtenNumber(3042).should.equal('trzy tysiące czterdzieści dwa');
      writtenNumber(3142).should.equal('trzy tysiące sto czterdzieści dwa');
      writtenNumber(3242).should.equal('trzy tysiące dwieście czterdzieści dwa');
      writtenNumber(13242).should.equal('trzynaście tysięcy dwieście czterdzieści dwa');
      writtenNumber(23242).should.equal('dwadzieścia trzy tysiące dwieście czterdzieści dwa');
      writtenNumber(123242).should.equal('sto dwadzieścia trzy tysiące dwieście czterdzieści dwa');
    });

  });
});
