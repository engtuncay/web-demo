SELECT 
	u.Name AS Ad
	,u.Surname AS Soyad
	,u.Age AS Yas
FROM Users AS u

SELECT DISTINCT * 
FROM Users


SELECT DISTINCT TOP(1) Age 
FROM Users
ORDER BY Age DESC

SELECT DISTINCT TOP(2) Age 
FROM Users
ORDER BY Age ASC