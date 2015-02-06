# AssertJS
Assert Library For Javascript

No library required.

<h4>Logical Examples</h4>
```javascript
Assert.isTrue(false, 'Value must be true');	// FAILS
Assert.isTrue(true, 'Value must be true'); // OK

Assert.isFalse(true, 'Value must be false');	// FAILS
Assert.isFalse(false, 'Value must be true');// OK

Assert.isEqual(4, 5, 'Values must be the same');	// FAILS
Assert.isEqual(4, "4", 'Values must be the same');	// OK

Assert.isNotEqual("34.2", 34.2, 'Values must be the same');	// FAILS
Assert.isNotEqual(new Date(), null, 'Values must be the same');	// OK

Assert.isEmpty([5], 'Array should be empty');	// FAILS
Assert.isEmpty([], 'Array should be empty');	// OK
Assert.isEmpty("", 'String should be empty');	// OK

Assert.isNotEmpty([], 'Array should be not empty');	// FAILS
Assert.isNotEmpty([5], 'Array should be not empty');	// OK
Assert.isNotEmpty("4", 'String should be not empty');	// OK

Assert.isGreater(5, 8, 'Current value should be greater than expected');	// FAILS
Assert.isGreaterEqual(8, 8, 'Current value should be greater than expected');	// OK
Assert.isLower(5, 8, 'Current value should be greater than expected');	// OK
Assert.isLowerEqual(8, 8, 'Current value should be greater than expected');	// OK
```

<h4>Type Examples</h4>
```javascript
Assert.isDefined(undefined, 'Value must be defined');// FAILS
Assert.isDefined(5, 'Value must be defined');// OK

Assert.isUndefined(5, 'Value must be undefined');// FAILS
Assert.isUndefined(undefined, 'Value must be undefined');// OK

Assert.isNull(undefined, 'Value must be null');// FAILS
Assert.isNull(null, 'Value must be null');// OK

Assert.isNotNull(null, 'Value must be null');// FAILS
Assert.isNotNull(!null, 'Value must be null');// OK

Assert.isArray(5, 'Value must be an array');// FAILS
Assert.isString([5], 'Value must be a string');// OK

Assert.isNumber("5", 'Value must be a number');// FAILS
Assert.isNumber(5, 'Value must be a number');// OK

Assert.isDate(5, 'Value must be a date');// FAILS
Assert.isDate(new Date(5), 'Value must be a date');// OK

Assert.isString(5, 'Value must be a string');// FAILS
Assert.isString("5", 'Value must be a string');// OK
```

<h4>Regex Examples</h4>
```javascript
Assert.validateEmail('test', 'Value must be an email');// FAILS
Assert.validateRegex('123.4', /[0-9]*\.[0-9]*/, 'Value must be valid');// OK
```
