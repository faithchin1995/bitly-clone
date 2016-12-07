require 'uri'


class Url < ActiveRecord::Base
	
	before_save :shorten, :counter
	validates :long_url, :presence => true , :format => URI::regexp(%w(http https))

	def shorten
		# range = [*'0'..'9', *'A'..'Z', *'a'..'z']

		# @short_url = (0...6).map{range.sample}.join
		# self.short_url = @short_url

		#self.short_url = SecureRandom.urlsafe_base64(8)
		if self.short_url == nil
		  self.short_url = "clone" + SecureRandom.hex(2.5)
	  end
	end


	def counter
		self.click_count = 0 if self.click_count == nil
	end

end


