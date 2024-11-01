import { Button } from '@/components/ui/button'


interface BackButtonProps{
    label : string
    href : string
}
const BackButton = ({label,href} : BackButtonProps) => {
  return (
    <Button>
        <a href={href}>
            {label}
        </a>
    </Button>
  )
}

export default BackButton
