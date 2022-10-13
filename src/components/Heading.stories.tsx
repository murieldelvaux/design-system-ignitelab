import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default{
    title: 'Components/Heading', // a barra cria subcategorias
    component: Heading,
    args:{
        children: 'Lorem Ipsum.',
        size: 'md',
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta< HeadingProps>

export const Default: StoryObj<HeadingProps> = {} //exporto como objeto vazio, pois não terá muitas variações
export const Small: StoryObj<HeadingProps> = {
    args:{
        size: 'sm' //configurando o tamanho da varição
    }
} 
export const Large: StoryObj<HeadingProps> = {
    args:{
        size: 'lg' //configurando o tamanho da varição
    }
} 
export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children:(
            <h1> Heading H1 </h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true, // para não mostrar children do componente
            }
        },
        asChild:{
            table:{
                disable: true, 
            }
        }
    }
}     