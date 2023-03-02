import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../hooks/redux';
import { IUsersInfo } from '../models/interfaces';
import { useActions } from '../hooks/actions';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button/";

const LoginScreen = () => {
  const { register, handleSubmit } = useForm<IUsersInfo>()
  const { database } = useAppSelector((state) => state.data);
  const { setIsLoginedTrue } = useActions();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUsersInfo> = (data) => {
    let existingUser = database.find(user => user.login === data.login && user.password === data.password)
    if (existingUser) {        
        setIsLoginedTrue()
        navigate('/profile')
    }
  }

  return (
    <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='p-2'>
        <label htmlFor='login'>Login</label>
        <input
          type='login'
          className='border px-2 w-full mt-1'
          {...register('login')}
          required
        />
      </div>
      <div className='p-2 w-full'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='border px-2 w-full mt-1'
          {...register('password')}
          required
        />
      </div>

      <div className='mt-4 ml-2'>
        <Button variant="contained" type='submit'>
            <span className="text-2xl font-bold text-gray-400">Login</span>
        </Button>
      </div>
    </form>
  )
}
export default LoginScreen