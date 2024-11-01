import authApi from '@/api/authApi';
import { useNavigate } from "react-router-dom"
import { jwtDecode} from 'jwt-decode'
import { DecodedToken, SignUpForm} from "../types/userType"
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '@/lib/axios/axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from '@/constant/index';
import { notification } from "antd";
import { routes } from '@/router/router';
export const useAuth = () => {
    const navigate = useNavigate();
    const decodeToken = (token: string) => {
        const decodedToken = jwtDecode<DecodedToken>(token)
        return decodedToken
    }
    const {
        data : user,
        isLoading : loadingInitial,
        error : error,
    } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const userId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').Id
          const response = await authApi.getCurrentUser(userId)
          if (!response) {
            // TODO: Redirect to login
            // localStorage.clear()
            // navigate(ROUTE_PATHS.LOGIN)
            return null
          } else return response
        },
      })

    const signInMutation = useMutation({
        mutationFn:  ({ username, password }: { username: string; password: string }) => authApi.loginUser(username,password),
        onSuccess: (data) => {
          
          // localStorage.setItem(TOKEN_KEY,data.data.accessToken)
          // localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken)
          // queryClient.invalidateQueries({ queryKey: ['user'] })
          // const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId
          // localStorage.setItem('userId', decodeToken(localStorage.getItem(TOKEN_KEY) || '').Id)
          // if (roleId == '0') {
          //   console.log('Admin')
          //   navigate(routes.home)
          // } else {
          //   console.log('User')
          //   navigate(routes.home)
          // }
          notification.success({
            message: data.message,
            description: 'You have successfully logged in',
          })
        },
        onError: (error) => {
          notification.error({
            message: error.message,
            description: 'Your username or password is incorrect.',
          })
        },
      })
    
      const signUpMutation = useMutation({
        mutationFn: (inputData: SignUpForm) => authApi.signUp(inputData),
        onSuccess: (data) => {
          navigate(routes.login)
          notification.success({
            message: data.message,
            description: 'You have successfully registered',
          })
        },
        onError: (error) => {
          notification.error({
            message: error.message,
          })
        },
      })
    
    //   const logoutMutation = useMutation({
    //     mutationFn: () => authApi.logOut(),
    //     onSuccess: () => {
    //       navigate(ROUTE_PATHS.ROOT)
    //       localStorage.clear()
    //       window.location.reload()
    //     },
    //     onError: (error) => {
    //       notification.error({
    //         message: error.message,
    //         description: 'Logout Failed!',
    //       })
    //     },
    //   })

    return {user, loadingInitial, error,signInMutation,signUpMutation}
}