import React from 'react'
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword'
import style from './styles.module.scss'
function CrosswordTaras() {
	const crosswordData = {
		down: {
			1: {
				clue: '	Шевченко мав багато талантів, та найперше він – геніальний...',
				answer: 'ПОЕТ',
				row: 1,
				col: 14
			},
			2: {
				clue: 'Пора року, коли народився Шевченко',
				answer: 'ВЕСНА',
				row: 3,
				col: 9
			},
			4: {
				clue: 'Назва найвідомішої збірки творів Шевченка.',
				answer: 'КОБЗАР',
				row: 1,
				col: 16
			},
			8: {
				clue: 'Майстерність, яка зробила Шевченка академіком Академії мистецтв. ',
				answer: 'ГРАВЕР',
				row: 3,
				col: 18
			},
			10: {
				clue: 'Яку науку називав Шевченко «Таємничою матір’ю історії»?',
				answer: 'АРХЕОЛОГІЯ',
				row: 0,
				col: 12
			},
			11: {
				clue: '«Незчисленні ……… не пускають мене в хату» - Про що казав Шевченко, гуляючи надворі аж до самісінького ранку?',
				answer: 'ЗІРОНЬКИ',
				row: 2,
				col: 21
			},
			12: {
				clue: 'Назва шапки, яку любив носити Шевченко.',
				answer: 'СМУШЕВА',
				row: 1,
				col: 5
			},
			14: {
				clue: 'Майбутній поет закінчив лише …. класи церковно-приходської школи.',
				answer: 'ДВА',
				row: 5,
				col: 1,
				onCorrect: () => {
					console.log('Correct')
				}
			}
		},
		across: {
			3: {
				clue: 'Улюблений напій Шевченка, як і мільйонів інших людей по всьому світу.',
				answer: 'ЧАЙ',
				row: 7,
				col: 8
			},
			5: {
				clue: 'В якому статусі народився і прожив перші 24 роки життя Шевченко. ',
				answer: 'КРІПАК',
				row: 1,
				col: 11
			},
			6: {
				clue: 'Жанр, в якому Шевченко-художник намалював більше 30 картин.',
				answer: 'АВТОПОРТРЕТ',
				row: 5,
				col: 18
			},
			7: {
				clue: 'Назва пустелі, де Шевченко малював свій автопортрет.',
				answer: 'КАРАКУМИ',
				row: 8,
				col: 21
			},
			9: {
				clue: 'Слово, яке зринає у творах Шевченка 1306 разів.',
				answer: 'БОГ',
				row: 3,
				col: 16
			},
			13: {
				clue: 'Жанр, в якому написано  твір «Причинна» (Реве та стогне Дніпр широкий).',
				answer: 'БАЛАДА',
				row: 7,
				col: 0
			},
			15: {
				clue: 'Світовий рекордсмен серед культурних діячів за кількістю встановлених пам’ятників, а саме 1167.',
				answer: 'ШЕВЧЕНКО',
				row: 4,
				col: 5
			}
		}
	}

	let result = {}

	const handleCorrect = (direction, number, answer) => {
		if (
			number === '6' ||
			number === '7' ||
			number === '8' ||
			number === '10' ||
			number === '12'
		) {
			result[number] = 10
		} else {
			result[number] = 5
		}
		console.log(result)
	}
	return (
		<div className={style.testTaras + ' adsasd'}>
			<ThemeProvider
				theme={{
					allowNonSquare: true,
					columnBreakpoint: '9999px',
					gridBackground: 'transparent',
					cellBackground: '#F8F7F9',
					cellBorder: '#937DB3',
					textColor: '#766490',
					numberColor: '#937DB3',
					focusBackground: '#BB9FE2',
					highlightBackground: '#DED8E3'
				}}
			>
				<Crossword data={crosswordData} onCorrect={handleCorrect} />
			</ThemeProvider>
			<a href="$" className="button">
				Відправити результати
			</a>
		</div>
	)
}

export default CrosswordTaras
