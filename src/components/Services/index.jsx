import React from 'react';
import { 
    StudyOne,
    StudyTwo,
    StudyThree,
    StudyFour,
    StudyFive,
    StudySix,
    StudySeven,
    StudyEight,
    StudyNine,
    StudyTen,
    StudyEleven,
    StudyTwelf,
    StudyThirteen,
    StudyFourteen,
    StudyFifteen,
    StudySixteen
} from './Data'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Studies</ServicesH1>            
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={StudyOne.servIcon}/>
                    <ServicesH2>{StudyOne.servH1}</ServicesH2>
                    <ServicesP>{StudyOne.ServP}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyTwo.servIcon}/>
                    <ServicesH2>{StudyTwo.servH1}</ServicesH2>
                    <ServicesP>{StudyTwo.ServP}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyThree.servIcon}/>
                    <ServicesH2>{StudyThree.servH1}</ServicesH2>
                    <ServicesP>{StudyThree.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyFour.servIcon}/>
                    <ServicesH2>{StudyFour.servH1}</ServicesH2>
                    <ServicesP>{StudyFour.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyFive.servIcon}/>
                    <ServicesH2>{StudyFive.servH1}</ServicesH2>
                    <ServicesP>{StudyFive.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudySix.servIcon}/>
                    <ServicesH2>{StudySix.servH1}</ServicesH2>
                    <ServicesP>{StudySix.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudySeven.servIcon}/>
                    <ServicesH2>{StudySeven.servH1}</ServicesH2>
                    <ServicesP>{StudySeven.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyEight.servIcon}/>
                    <ServicesH2>{StudyEight.servH1}</ServicesH2>
                    <ServicesP>{StudyEight.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyNine.servIcon}/>
                    <ServicesH2>{StudyNine.servH1}</ServicesH2>
                    <ServicesP>{StudyNine.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyTen.servIcon}/>
                    <ServicesH2>{StudyTen.servH1}</ServicesH2>
                    <ServicesP>{StudyTen.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyEleven.servIcon}/>
                    <ServicesH2>{StudyEleven.servH1}</ServicesH2>
                    <ServicesP>{StudyEleven.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyTwelf.servIcon}/>
                    <ServicesH2>{StudyTwelf.servH1}</ServicesH2>
                    <ServicesP>{StudyTwelf.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyThirteen.servIcon}/>
                    <ServicesH2>{StudyThirteen.servH1}</ServicesH2>
                    <ServicesP>{StudyThirteen.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyFourteen.servIcon}/>
                    <ServicesH2>{StudyFourteen.servH1}</ServicesH2>
                    <ServicesP>{StudyFourteen.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudyFifteen.servIcon}/>
                    <ServicesH2>{StudyFifteen.servH1}</ServicesH2>
                    <ServicesP>{StudyFifteen.ServP}.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={StudySixteen.servIcon}/>
                    <ServicesH2>{StudySixteen.servH1}</ServicesH2>
                    <ServicesP>{StudySixteen.ServP}.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
