import { login, logout, setTargetsToCompleted, setDiaryToCompleted, setTargetsToSubmitted } from '../../actions/auth';


test('should setup login action object', () => {
    const uid = 'bbhbhbes'
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      uid
    });
  });

  test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });

test('should setup setTargetsToCompleted action object', () => {
  const action = setTargetsToCompleted();
  expect(action).toEqual({
    type: 'SET_TARGETS_TO_COMPLETED'
  });
});



test('should setup setDiaryToCompleted action object', () => {
  const action = setDiaryToCompleted();
  expect(action).toEqual({
    type: 'SET_DIARY_TO_COMPLETED'
  });
});

test('should setup setTargetsToSubmitted action object', () => {
  const action = setTargetsToSubmitted();
  expect(action).toEqual({
    type: 'SET_TARGETS_TO_SUBMITTED'
  });
});