const {unit: it, spec: describe} = require('kavun');
const assert = require('assert');

/*
- [ ] for multi day event show: 1 May - 3 May
- [ ] for one day event show: 1 May, 10:00
 */

describe('Render start+end date', () => {
  describe('WHEN both are given', () => {
    describe('AND they are on different days', () => {
      it('show startDate "1 May"', () => {
        
        assert.deepEqual(updateStartDate.calledWith, {});
      });
      it('show endDate "3 May"', () => {
        
        assert.deepEqual(updateEndDate.calledWith, {});
      });
    });
  });
});
