import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('useForm custom hook tests', () => {
  const initialForm = {
    name: 'Rocard',
    email: 'e@mail.com',
  };
  test('should return default value', () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test('should return the name of the form', () => {
    const newName = 'Skyblue';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newName } });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });
  test('should reset value to initial', () => {
    const newName = 'Skyblue';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newName } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
