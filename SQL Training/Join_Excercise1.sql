select * from Album
select * from Artist
select * from RecordLabel
select * from Song

--Solution:- 1
select a.name as 'Artist Name' , r.name as 'Record label name' from Artist a join  RecordLabel r on a.labelid = r.labelId;


--Solution no:-2
select artist.name as 'Artist Name' , COUNT(s.name) as 'Song Name' from Artist artist join album al on artist.artistid=al.artistId 
join song s on s.albumId=al.albumId
group by artist.name order by  [Song Name] desc

--Solution no:-3
select artist.name as 'Artist' ,al.name as 'album' , s.duration from Artist artist join album al on artist.artistid=al.artistId 
join song s on s.albumId=al.albumId
where artist.artistId >1
--where al.name not like '..%'
group by artist.name, al.name, s.duration
order by [album],[Artist] asc 

--Solution no:-4
select artist.name as 'Artist' ,al.name as 'album'  from Artist artist join album al on artist.artistid=al.artistId 
where artist.artistId =1


--Solution No:-5
select artist.name as 'Artist' ,SUM(s.duration)as 'Duration of all songs' from Artist artist join album al on artist.artistid=al.artistId 
join song s on s.albumId=al.albumId
group by artist.name 
order by [Duration of all songs] desc



