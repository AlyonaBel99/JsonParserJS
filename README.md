# JsonParserJS
# Программа для парсинга данных по определённой дате из файла json
Данная программа принимает на вход json с информацией о клиенте и его картах (0-20 штук) и объект Date. Далее происходит загрузка данных из Json в объекты. 
Входные данные передаются в функцию getCardsArrayExpDate(json, date), которая возвращает массив, состоящих из последних 4 цифр поля CardNumber тех карт, 
срок действия которых заканчивается раньше, чем указанное поле Date.  
Программа возвращает null, если ни одной карты с указанными требованиями не нашлось или на входе некорректные данные.
