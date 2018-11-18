from filereader import *
from searcher import *
import random
from flask import jsonify

def getMode(mode):
	MODES = {
		"easy": 10,
		"medium": 50,
		"expert": 100
	}
	return (MODES.get(mode))

def getResponseObject(mode):
	maxNumber = getMode(mode)
	# TODO: handle exception
	peopleResp = getPeopleNames(maxNumber)
	answerResp = peopleResp[random.randint(0, 3)]
	#print(people)
	#print(answer)
	# search for one
	LinkResp = getLink(answerResp)
	return jsonify(
			people = peopleResp,
			answer = answerResp,
			link = LinkResp
		)

if __name__ == '__main__':
	getResponseObject("expert")

def testGetMode():
	getMode('easy') == 10
	getMode('medium') == 50
	getMode('expert') == 100