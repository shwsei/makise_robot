import PIL.Image as Image
from nsfw import classify
from sys import argv
import os

try:
    image = Image.open(argv[1])
    sfw, nsfw = classify(image)

    print(nsfw)
    os.remove(argv[1])

except Exception as err:
    print('Erro ao analisar imagem\nErr: ',err)
