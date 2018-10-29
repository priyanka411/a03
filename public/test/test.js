QUnit.test('Testing given time with several sets of inputs', function (assert) {
    assert.equal(vfirst("1:52:00"), "1:52:00", 'Tested 1 minute ahead time');
    assert.equal(vlast("2:00:00"), "2:00:00", 'Tested with 10 minutes ahead of time ');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { vfirst(""); }, /The given time isn't correct time/, 'Passing in null correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { vfirst("24:00:00"); }, /The given argument is not a valid time/, 'Passing hours place with 24 ');
    assert.throws(function () { vfirst("10:72:00"); }, /The given argument is not a valid time/, 'Passing in a minutes more than 60 raises an Error');
  });