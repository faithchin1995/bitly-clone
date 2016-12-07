get '/' do
  # puts "[LOG] Getting /"
  # puts "[LOG] Params: #{params.inspect}"
  # erb: index
  @urls = Url.last(5)
  # @urls.reverse!
  erb :"static/index"
end

post '/urls' do
	@url = Url.new
	@url.long_url = params[:long_url]
	@url.save
	#redirect '/' #this is for before ajax
	@url.to_json
end

get '/:short_url' do
	puts "ENTERED"
	@url = Url.find_by(short_url: params[:short_url])
	@url.click_count += 1
	@url.save

	redirect "#{@url.long_url}"
end

