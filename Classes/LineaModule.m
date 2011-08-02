/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "LineaModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

@implementation LineaModule

int beep1[]={2730,250};

#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"c68ad7df-1e28-40d2-bc53-b940962b0def";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"linea";
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];
	
    Linea *lineaPro_ = [Linea sharedDevice];
	[lineaPro_ addDelegate:self];
	[lineaPro_ connect];
    
	NSLog(@"[INFO] %@ loaded",self);
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably
	
	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup 

-(void)dealloc
{
	// release any resources that have been retained by the module
	[super dealloc];
}

#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"my_event"])
	{
		// the first (of potentially many) listener is being added 
		// for event named 'my_event'
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"my_event"])
	{
		// the last listener called for event named 'my_event' has
		// been removed, we can optionally clean up any resources
		// since no body is listening at this point for that event
	}
}

-(void)connectionState:(int)state {
	switch (state) {
		case CONN_DISCONNECTED:
		case CONN_CONNECTING:
			NSLog(@"[LINEA] Linea connectionState=CONNECTING/DISCONNECTED");
			break;
		case CONN_CONNECTED:
			[linea startScan];
            [linea msStartScan];
			NSLog(@"[LINEA] Linea connectionState=CONNECTED");
            [linea setScanBeep:TRUE volume:10 beepData:beep1 length:sizeof(beep1)];
			break;
	}
}

-(void)barcodeData:(NSString *)barcode type:(int)type {
	NSLog(@"[LINEA] Linea barcodeData");
	[self fireEvent:@"barcodeData" withObject:barcode withSource:barcode];
}

-(void)magneticCardData:(NSString *)track1 track2:(NSString *)track2 track3:(NSString *)track3 {
    NSLog(@"[LINEA] Linea magneticCardData");
    NSString *tracks = [NSString stringWithFormat:@"%@%@%@", track1, track2, track3];
    [self fireEvent:@"magneticCardData" withObject:tracks withSource:tracks];
}

@end
