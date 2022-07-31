import styled from 'styled-components'
import {device} from '../../contants'

export const RegistrationWrapper = styled.div`
width: 100%;
padding: 10px 75px;
@media ${device.tablet}{
    padding: 10px;
}
@media ${device.mobileL}{
    padding: 5px;
}

.title-registration{
    font-size: 1.5rem;
    font-weight: 600;
}
.wrapper-registration{
    width: 100%;
    display: flex;
    @media ${device.mobileL}{
       flex-direction: column;
    }
    .form-registration{
    width: 70%;
    @media ${device.mobileL}{
       width: 100%;
    }
    }

.form-registration{
    form {
    .over-input {
        label{
         padding-left: 5rem;
         @media ${device.tablet}{
            padding-left: 2rem;
         }
         @media ${device.mobileL}{
            padding-left: 1rem;
         }
        }
        input{
            width: 70%;
        }
    }
   .gt{
    display: flex;
    align-items: center;
    label{
        display: block !important;
        width: 25%;
        padding-left: 5rem;
        font-size: 1.2rem;
        @media ${device.tablet}{
          padding-left: 2rem
        }
        @media ${device.mobileL}{
       padding-left: 1rem;
    }
    }
    .over-input{
        margin-right: 2rem;
        flex-direction: row-reverse;
        input{
            width: fit-content;
        }
        label{
            padding-left: 0.5rem;
        }
    }
    
   }
   .select{
    display: flex;
   }
   .select label{
    display: inline-block;
    width: 25%;
    padding-left: 5rem;
    font-size: 1.3rem;
    @media ${device.tablet}{
       padding-left: 2rem
    }
    @media ${device.mobileL}{
       padding-left: 1rem;
    }
   }
   .select select{
    width: 65%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 3px;
}
.select-firt select {
   width: 15%;
   margin-right: 5px;
   @media ${device.mobileL}{
       width: 20%;
   }
}
.comment-agress{
    margin: 10px 0;
    margin-left: 25%;
    textarea{
        padding: 5px;
        width: 86%;
        min-height: 6rem;
        font-size: 1.1rem;
        border: 1px solid #ddd;
        line-height: 20px;
    }
    .over-input{
     flex-direction: row-reverse;
     justify-content: flex-end !important;
     &:first-child label{
        font-weight: bold;
     }
     label{
     display: block !important;
     padding-left: 1rem !important;
     flex-grow: 1;
    }
    input{
     width: fit-content !important;
    }
    }
}

.over-input:last-child{
        display: flex;
        justify-content: center;
        label{
        display: none;
        }
        input {
        width: fit-content ;
        padding: 8px 12px;
        font-weight: bold;
        background-color: #4267b2;
        color: #fff;
        font-size: 1.3rem;
    }
    } 
}
.btn-DK{
    display: inline-block;
    background-color: #4267b2;
    padding: 12px 20px;
    border-radius: 3px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    a{
        color: #fff;
    }
}
}


.sign-btn{
    padding-left:30px ;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid #ddd;
    @media ${device.mobileL}{
    padding: 0;
    flex-direction: row;
    width: 100%;
    border: none;
}
}
.sign-btn a{
    margin: 5px 0;
    display: inline-block;
    text-decoration: none;
    @media ${device.mobileL}{
      margin: 5px;
    }
}
}


`