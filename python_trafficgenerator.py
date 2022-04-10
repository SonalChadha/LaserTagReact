from logging.config import listen
from pickletools import read_long1
import socket
import random
import time

bufferSize  = 1024
serverAddressPort   = ("127.0.0.1", 7501)
redPlayersCount = input('How many RED players are in your team? ')
greenPlayersCount = input('How many GREEN players are in your team? ')
redDict = {}
greenDict = {}
for x in range(1, (int(redPlayersCount) + 1)):
	redDict["red{0}".format(x)] = input('Enter id of RED player ' + str(x) + ' ==> ')
for x in range(1, (int(greenPlayersCount) + 1)):
	greenDict["green{0}".format(x)] = input('Enter id of GREEN player ' + str(x) + ' ==> ')

print('')
counter = 1000

# Create datagram socket
UDPClientSocketTransmit = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)

# counter number of events, random player and order
i = 1
while i < int(counter):
	randomRedPlayer = random.randint(1,int(redPlayersCount))
	if randomRedPlayer == 1:
		redplayer = redDict.get("red1")
	elif randomRedPlayer == 2:
		redplayer = redDict.get("red2")
	elif randomRedPlayer == 3:
		redplayer = redDict.get("red3")
	elif randomRedPlayer == 4:
		redplayer = redDict.get("red4")
	elif randomRedPlayer == 5:
		redplayer = redDict.get("red5")
	elif randomRedPlayer == 6:
		redplayer = redDict.get("red6")
	elif randomRedPlayer == 7:
		redplayer = redDict.get("red7")
	elif randomRedPlayer == 8:
		redplayer = redDict.get("red8")
	elif randomRedPlayer == 9:
		redplayer = redDict.get("red9")
	elif randomRedPlayer == 10:
		redplayer = redDict.get("red10")
	elif randomRedPlayer == 11:
		redplayer = redDict.get("red11")
	elif randomRedPlayer == 12:
		redplayer = redDict.get("red12")
	elif randomRedPlayer == 13:
		redplayer = redDict.get("red13")
	elif randomRedPlayer == 14:
		redplayer = redDict.get("red14")
	elif randomRedPlayer == 15:
		redplayer = redDict.get("red15")

	randomGreenPlayer = random.randint(1,int(greenPlayersCount))
	if randomGreenPlayer == 1:
		greenplayer = greenDict.get("green1")
	elif randomGreenPlayer == 2:
		greenplayer = greenDict.get("green2")
	elif randomGreenPlayer == 3:
		greenplayer = greenDict.get("green3")
	elif randomGreenPlayer == 4:
		greenplayer = greenDict.get("green4")
	elif randomGreenPlayer == 5:
		greenplayer = greenDict.get("green5")
	elif randomGreenPlayer == 6:
		greenplayer = greenDict.get("green6")
	elif randomGreenPlayer == 7:
		greenplayer = greenDict.get("green7")
	elif randomGreenPlayer == 8:
		greenplayer = greenDict.get("green8")
	elif randomGreenPlayer == 9:
		greenplayer = greenDict.get("green9")
	elif randomGreenPlayer == 10:
		greenplayer = greenDict.get("green10")
	elif randomGreenPlayer == 11:
		greenplayer = greenDict.get("green11")
	elif randomGreenPlayer == 12:
		greenplayer = greenDict.get("green12")
	elif randomGreenPlayer == 13:
		greenplayer = greenDict.get("green13")
	elif randomGreenPlayer == 14:
		greenplayer = greenDict.get("green14")
	elif randomGreenPlayer == 15:
		greenplayer = greenDict.get("green15")

	if random.randint(1,2) == 1:
		message = redplayer + ":" + greenplayer
	else:
		message = greenplayer + ":" + redplayer

	print(message)
	i+=1;
	UDPClientSocketTransmit.sendto(str.encode(str(message)), serverAddressPort)
	time.sleep(random.randint(1,5))
print("program complete")