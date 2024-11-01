"use client"
import { Card,CardContent,CardHeader,CardFooter } from '@/components/ui/card'
import AuthHeader from './auth_header'
import BackButton from './back_button'


interface CardWrapperProps {
    label: string
    title: string
    backButtonHref: string
    backButtonLabel: string
    children: React.ReactNode
}
const CardWrapper = ({label,title,backButtonHref,backButtonLabel,children} : CardWrapperProps) => {
  return (
    <Card>
        <CardHeader>
            <AuthHeader label={label} title={title} />
        </CardHeader>
            
        <CardContent>
            {children}
        </CardContent>
        
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref}/>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper
